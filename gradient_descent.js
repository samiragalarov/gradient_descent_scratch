let m = 0
let b = 0

function gradient_descent(x, y) {

    let m_curr = 0;
    let b_curr = 0;
    const learning_rate = 0.01;
    const iterations = 60;
    const n = x.length;

    for (let i = 0; i < iterations; i++) {

        let y_predicted = [];
        for (let o = 0; o < n; o++) {
            let CAl_y_predicted = m_curr * x[o] + b_curr;
            y_predicted.push(CAl_y_predicted);

        }

        let cost = 0;
        for (let p = 0; p < n; p++) {
            cost += (y[p] - y_predicted[p]) ** 2            
        }
        cost *= (1 / n);

 
        let md = 0;
        for (let s = 0; s < n; s++) {
            md += x[s] * (y[s] - y_predicted[s]);

        }
        md *= (-2 / n)
        let bd = 0;
        for (let d = 0; d < n; d++) {
            bd += (y[d] - y_predicted[d]);

        }
        bd *= (-2 / n);

        m_curr = m_curr - learning_rate * md;
        b_curr = b_curr - learning_rate * bd; 

    }
    m = m_curr;
    b = b_curr;

}

gradient_descent([1,2,3,4,5], [5,7,9,11,13])
